function user(nama, npm){
    this.nama = nama;
    this.npm = npm;

    this.addNama = function(listnama){
        this.nama.push(listnama);
    }


}
var user1 = new user([],[])