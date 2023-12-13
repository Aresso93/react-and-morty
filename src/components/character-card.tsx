interface characterCardProps{
    name: string;
    id: number;
    status: string;
    species: string;
    gender: string;
    image: string;
    location: []
    episode: [];
}

export function CharacterCard(props: characterCardProps){
    return (
        <>
        <div>{props.name}</div>
        <div>{props.gender}</div>
        </>
    )
}