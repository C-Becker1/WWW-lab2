import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

export default function Image(props) {
    const data = useStaticQuery(graphql`
        query {
            allFile {
                edges {
                    node {
                        name
                        base
                        childImageSharp {
                            gatsbyImageData
                        }
                        changeTime(formatString: "YYYY-MM-DD")
                    }
                }
                totalCount
            }
        }
        `)
    return (
        <div>
            <Container>
                <Typography variant="h4">
                    Mostrando un total de {data.allFile.totalCount} imágenes.
                </Typography>
            </Container>
            <ImageList sx={{ width: 500, height: 450 }}>
                {data.allFile.edges.map((image, index) => (
                    <ImageListItem key={index} >
                        <GatsbyImage
                            fit='crop'
                            width={248}
                            auto='format'
                            loading='lazy'
                            image={getImage(image.node)}
                            alt={image.node.base.split(".")[0]} // only use section of the file extension with the filename
                        />
                        <ImageListItemBar
                            title={image.node.name}
                            subtitle={image.node.changeTime}
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
