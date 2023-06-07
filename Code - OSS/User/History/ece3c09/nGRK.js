function user(nama, kelas){
    this.nama = nama;
    this.kelas = kelas;

    this.addNama = function(listnama){
        this.nama.push(listnama);
        return this.nama;
    }
    this.delNama = function(listnama){
        if(this.nama.length === 0){
            alert('nama masih kosong');
            return false;
        }
    }

}
var user1 = new user(['ads','asd'],['qwe','eqwe']);