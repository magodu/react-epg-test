export type EpgContextObj = {
    searchQuery: string;
    setSearchQueryHandler: (query: string) => void;
};

export interface InputProps {
    children: React.ReactElement;
}

export interface favoriteChannel {
    id: string;
}

interface channelLogo {
    logo: string;
}

export interface programEpg {
    title: string;
    id: string;
    start: string;
    end: string;
}

export interface epgData {
    id: string;
    title: string;
    images: channelLogo;
    schedules: programEpg[];
}

export interface epgFilteredData {
    channelId: string;
    channel: string;
    image: string;
    results: programEpg[];
}
