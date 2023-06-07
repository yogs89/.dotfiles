function user(nama, kelas){
    this.nama = nama;
    this.kelas = kelas;

    this.addNama = function(listnama){
        this.nama.push(listnama);
        return this.nama;
    }


}
var user1 = new user(['ads','asd'],['qwe','eqwe'])