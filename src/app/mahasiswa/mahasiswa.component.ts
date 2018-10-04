import { Component, OnInit } from '@angular/core';
import { Mahasiswa } from '../share/mahasiswa';

@Component({
  selector: 'app-mahasiswa',
  templateUrl: './mahasiswa.component.html',
  styleUrls: ['./mahasiswa.component.css']
})
export class MahasiswaComponent implements OnInit {
  daftarmahasiswa : Mahasiswa[] = [];
  nim = ' ';
  nama = ' ';
  kelas = ' ';
  data;

  constructor() { }

  ngOnInit() {
  }

  tambahmahasiswa(){
    this.data = new Mahasiswa(this.nim, this.nama, this.kelas);
    this.daftarmahasiswa.push(this.data);
    this.nim='';
    this.nama='';
    this.kelas='';
  }

}
