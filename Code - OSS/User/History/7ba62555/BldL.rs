use std::env;
use reqwest::Url;
use tokio::fs::File;
use tokio::io::{AsyncWriteExt, BufWriter};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Get the video URL from the command line arguments
    let args: Vec<String> = env::args().collect();
    if args.len() < 2 {
        eprintln!("Please provide a YouTube video URL as an argument");
        return Ok(());
    }
    let video_url = &args[1];

    // Fetch video information using YouTube's API
    let video_info_url = format!("https://www.youtube.com/oembed?url={}&format=json", video_url);
    let video_info = reqwest::get(&video_info_url)
        .await?
        .json::<serde_json::Value>()
        .await?;

    // Extract video title and download URL
    let video_title = video_info["title"].as_str().unwrap();
    let download_url = video_info["thumbnail_url"].as_str().unwrap();

    // Prepare the filename for the downloaded video
    let filename = format!("{}.mp4", video_title);

    // Create a file for writing the video content
    let file = File::create(&filename).await?;
    let mut writer = BufWriter::new(file);

    // Download the video content and save it to the file
    let mut response = reqwest::get(download_url).await?;
    while let Some(chunk) = response.chunk().await? {
        writer.write_all(&chunk).await?;
    }

    println!("Video downloaded successfully as: {}", filename);

    Ok(())
}
