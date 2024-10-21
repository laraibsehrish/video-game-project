import { HStack, List, ListItem, Image, Button, Heading } from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import { getCroppedImageUrl } from "../services/image-url";


interface Props {
  onSelectGenre: (genre: Genres) => void;
  selectedGenre: Genres | null;
}
const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data } = useGenres();
  return (
    <>
    <Heading fontSize={"2xl"} paddingBottom={3}>Genres</Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id}>
            <HStack paddingBottom={3}>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
