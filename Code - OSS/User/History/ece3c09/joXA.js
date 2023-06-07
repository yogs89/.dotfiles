
function Video({ video }) {
    return (
      <div>
        <Thumbnail video={video} />
        <a href={video.url}>
          <h3>{video.title}</h3>
          <p>{video.description}</p>
        </a>
        <LikeButton video={video} />
      </div>
    );
  }













// function user(nama, kelas){
//     this.nama = nama;
//     this.kelas = kelas;

//     this.addNama = function(listnama){
//         this.nama.push(listnama);
//         return this.nama;
//     }
//     this.delNama = function(listnama){
//         if(this.nama.length === 0){
//             alert('nama masih kosong');
//             return false;
//         }
//         for( var i = 0; i< this.nama.length; i++){
//             if(this.nama[i] = listnama){
//                 this.nama[i] = undefined;
//                 return this.nama;
//             }
//         }
//     }

// }
// var user1 = new user([],[]);