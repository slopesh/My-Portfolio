import { ReactNode } from "react";

interface Tech {
    title: string;
    icon: ReactNode;
    link: string;
}

// Based on Lanyard's API Response
export interface Presence {
    discord_user: {
        id: string;
        username: string;
        avatar: string;
        discriminator: string;
    };
    discord_status: string;
    activities: Activity[];
    spotify: {
        track_id: string;
        timestamps: {
            start: number;
            end: number;
        };
        song: string;
        artist: string;
        album_art_url: string;
        album: string;
    } | null;
}

interface Activity {
  application_id: string;
  assets: {
    large_image: string;
    large_text: string;
    small_image: string;
    small_text: string;
  };
  details: string;
  emoji: {
    name: string;
  };
  name: string;
  state: string;
  timestamps: {
    start: number;
    end: number;
  };
  type: number;
}