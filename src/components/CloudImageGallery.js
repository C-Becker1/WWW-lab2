import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import "./gallery.css"
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const CloudImageGallery = () => {
    const data = useStaticQuery(graphql`query CloudinaryImage {
        allCloudinaryMedia {
          edges {
            node {
              secure_url
              created_at(formatString: "YYYY-MM-DD")
              height
              width
            }
          }
          totalCount
        }
      }`
    )
    const clImages = data.allCloudinaryMedia.edges
    return (
        <div>
            <Container>
                <Typography variant="h4">
                    Mostrando un total de {data.allCloudinaryMedia.totalCount} imágenes.
                </Typography>
            </Container>
            <ImageList sx={{ width: 500, height: 450 }}>
                {clImages.map((image, index) => (
                    <ImageListItem key={index}>
                        <img
                            src={`${image.node.secure_url}?w=248&fit=crop&auto=format`}
                            srcSet={`${image.node.secure_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            loading="lazy"
                            alt={image.node.created_at}
                        />
                        <ImageListItemBar
                            title={`${image.node.width}x${image.node.height}`}
                            subtitle={image.node.created_at}
                            actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${image.node.created_at}`}
                                >
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    )
}

export default CloudImageGallery