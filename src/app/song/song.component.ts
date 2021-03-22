import { SongService } from './../song.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

  songList:any

  constructor(private http:HttpClient,private songService:SongService) { }

  ngOnInit(): void {

    this.songService.getSongList().subscribe(data=>{
      console.log("hcfhgchgc",data)
      this.songList = data;
    })

  }

}
