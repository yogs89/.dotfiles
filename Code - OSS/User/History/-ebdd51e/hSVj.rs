fn main() {
    wow();
}

fn wow(x: u32) -> u32 {
    if x < 2 {
        return x;
    } else {
        return wow(x-2) + 3 * wow(x-1);
    }
}
