import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Song {
  @PrimaryGeneratedColumn()
  index: number;

  @Column()
  title: string;
  @Column()
  artist: string;
  @Column()
  comment: string;
  @Column()
  youtubeId: string;
  @Column()
  date: string;
  @Column()
  tagList: string[];
}
