import { Box, Typography } from "@mui/material";
import Image from "next/image";


export const Features = () => {
    return(
        <Box maxWidth="xl" className="feature_section">
      <Box className="flex items-center justify-center bg-bluey">
          <Box className="box flex items-center justify-center space-x-3">
            <Box className="img-box">
              <Image
                src="/assets/images/infant.png"
                alt="infant"
                width={40}
                height={40}
                className="object-cover"
              />
            </Box>
            <Box className="detail-box">
              <h4>
                Infant Care
              </h4>
            </Box>
          </Box>

          <Box className="box flex items-center justify-center space-x-3">
            <Box className="img-box">
                <Image
                    src="/assets/images/toddler.png"
                    alt="toddler"
                    width={40}
                    height={40}
                    className="object-cover"
                />
            </Box>
            <Box className="detail-box">
              <h4>
                Toddler Care
              </h4>
            </Box>
          </Box>

          <Box className="box flex items-center justify-center space-x-3">
            <Box className="img-box">
                <Image
                    src="/assets/images/early.png"
                    alt="early pre-school"
                    width={100}
                    height={100}
                    className="object-cover"
                />
            </Box>
            <Box className="detail-box">
              <h4>
                Early Pre-school
              </h4>
            </Box>
          </Box>

          <Box className="box flex items-center justify-center space-x-3">
            <Box className="img-box">
                <Image
                    src="/assets/images/pre.png"
                    alt="pre-school"
                    width={40}
                    height={40}
                    className="object-cover"
                />
            </Box>
            <Box className="detail-box">
              <h4>
                Pre-school
              </h4>
            </Box>

            <Box className="box flex items-center justify-center space-x-3">
            <Box className="img-box">
                <Image
                    src="/assets/images/toddler.png"
                    alt="before and after school"
                    width={40}
                    height={40}
                    className="object-cover"
                />
            </Box>
            <Box className="detail-box">
              <h4>
                Before &amp; School
              </h4>
            </Box>
        </Box>

        <Box className="box flex items-center justify-center space-x-3">
            <Box className="img-box">
                <Image
                    src="/assets/images/pre.png"
                    alt="summer"
                    width={40}
                    height={40}
                    className="object-cover"
                />
            </Box>
            <Box className="detail-box">
              <h4>
                Summer Camp
              </h4>
            </Box>
          </Box>
        </Box>
      </Box>
  </Box>

    )
}