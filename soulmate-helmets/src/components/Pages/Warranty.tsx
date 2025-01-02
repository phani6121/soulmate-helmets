import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Grid, Box } from '@mui/material';
import Footer from '../Layout/Footer';

const Warranty: React.FC = () => {

    const navigate = useNavigate();

    useEffect(() => {
        let username = sessionStorage.getItem("username");
        if (username === "" || username === null) {
            navigate("/login");
        }
    }, [navigate]);

    return (
        <div style={{ marginTop: '100px', backgroundColor: "#FFFAFA", color: "black" }}>
            <Grid container style={{ padding: "0px 120px" }}>

                {/* Title Section */}
                <Box mb={4} textAlign="center">
                    <Typography style={{ marginLeft: "172px", marginTop: "60px" }} variant="h4" gutterBottom>
                        Soulmate Helmets Warranty Information
                    </Typography>
                </Box>

                {/* Warranty Information Section */}
                <Box mb={4} p={4} bgcolor="#FFF0F5" boxShadow={3} borderRadius="10px">
                    <Typography variant="body1" paragraph>
                        The Soulmate helmet is designed and manufactured to satisfy your requirements. To ensure your safety and that of your passenger, you should respect all safety rules.
                    </Typography>

                    <Typography variant="body1" paragraph>
                        Soulmate provides a warranty on every helmet it sells. The warranty claim MUST be accompanied by the tax invoice issued by an authorized reseller/dealer.
                    </Typography>

                    <Typography variant="body1" paragraph>
                        To make a claim, you may click here or approach the reseller or dealer or mail the company directly at customercare@Soulmateauto.com for any assistance.
                    </Typography>

                    <Typography variant="body1" paragraph>
                        Liability is limited to the repair or replacement of the product. The company retains the right to reject any claim at its sole discretion.
                    </Typography>
                </Box>

                {/* Warranty Guidelines Section */}
                <Box mb={4} p={4} bgcolor="#FFF0F5" boxShadow={3} borderRadius="10px">
                    <Typography variant="h6" gutterBottom textAlign="center">
                        Warranty Guidelines
                    </Typography>

                    <Typography variant="body1" paragraph>
                        Once the digital warranty is registered, the customers can start the claim process anytime within the warranty period by clicking on the link here or approaching the store where they bought the helmet with a valid purchase invoice.
                    </Typography>

                    <Typography variant="body1" paragraph>
                        If the warranty is activated, Soulmate Helmets shall do everything in its power to rapidly assist the client; however, it must be noted that the length of the assistance period shall depend on the technical evaluation of the product, with a maximum duration of 15 days counting from the date of receival of the product.
                    </Typography>

                    <Typography variant="body1" paragraph>
                        Soulmate Helmets shall return any product immediately if the client fails to respect the methods and time limits foreseen in the attendant legislation relative to the communication of the warranty activation; or if the product is not properly packaged and accompanied by a copy of the proof of purchase document.
                    </Typography>
                </Box>

                {/* Exclusions Section */}
                <Box mb={4} p={4} bgcolor="#FFF0F5" boxShadow={3} borderRadius="10px">
                    <Typography variant="h6" gutterBottom textAlign="center">
                        Exclusions
                    </Typography>

                    <Typography variant="body1" paragraph>
                        Soulmate Helmets shall repair or replace the helmet or helmet parts and return the items to the customer where the request was made. Conversely, if the complaint is not justified, receival and delivery costs shall be billed to the customer.
                    </Typography>

                    <Typography variant="body1" paragraph>
                        Warranty is limited to manufacturing defects for 1 Year only from the purchase invoice date. Soulmate Helmets cannot be held responsible concerning the product, nor is the company liable for any warranty, in the following cases:
                    </Typography>

                    <ul>
                        <li>Any damage caused by the impact due to a fall or accident.</li>
                        <li>Aesthetic (scratches, cracks, etc.) or functional damage owing to impact from road detritus or impact with the ground or solid objects during the use or transport of the helmet or inadequate use of components and accessories (visors, peaks, etc.).</li>
                        <li>Damage or wear of interior linings resulting from normal use and/or abuse.</li>
                        <li>Alterations and/or installation of accessories that do not belong to Soulmate (Glue, adhesive products, paints, fasteners, etc.).</li>
                        <li>Inadequate adjustment: it is the user’s responsibility to ensure a proper adjustment at the time of purchase.</li>
                        <li>Use of or contact with harmful chemicals or exposure to sources of intense heat.</li>
                        <li>Inadequate use: abnormal conditions (for example, immersion in water), lack of maintenance or care, inadequate handling or packaging, improper handling of components or accessories such as visors, peaks, etc.</li>
                        <li>Aging due to the normal wear of internal fibres or foam, and the visual aspect of exterior parts or visors (scratches, marks, etc.).</li>
                        <li>Loss of color intensity or wearing out of the colors (especially Neon and Mate) due to prolonged exposure to ultraviolet light, decorative lights, inclement weather, or various other sources and types of dirt.</li>
                        <li>Any visors and spoilers do not come under warranty.</li>
                    </ul>

                    <Typography variant="body1" paragraph>
                        The occurrence of any of the aspects referred to above absolves the Soulmate Helmets brand of any responsibility.
                    </Typography>
                </Box>

                {/* Helmet Modifications Warning Section */}
                <Box mb={4} p={4} bgcolor="#FFF0F5" boxShadow={3} borderRadius="10px">
                    <Typography variant="h6" gutterBottom textAlign="center">
                        DO NOT MODIFY YOUR HELMET
                    </Typography>

                    <Typography variant="body1" paragraph>
                        Modifying your helmet may increase your risk of serious injury or death in an accident. Do not modify your helmet. Modifications include the following:
                    </Typography>

                    <ul>
                        <li>Drilling holes.</li>
                        <li>Cutting shell, liner, or strap.</li>
                        <li>Modifying the retention system, including adding a chin cup.</li>
                        <li>Removing parts.</li>
                        <li>Painting.</li>
                        <li>Installation of accessories that are not manufactured by Soulmate for this helmet.</li>
                    </ul>
                </Box>

                {/* Care & Maintenance Section */}
                <Box mb={4} p={4} bgcolor="#FFF0F5" boxShadow={3} borderRadius="10px">
                    <Typography variant="h6" gutterBottom textAlign="center">
                        Care & Maintenance
                    </Typography>

                    <Typography variant="body1" paragraph>
                        To prolong the usable life of your helmet, you must clean it regularly. This does not mean a full strip-down wash every time, that level of clean can be reserved for once or maybe twice a season. More frequent, routine cleanings can be as simple as a quick wipe down with a wet towel, or a limited wash of the easily removable parts.
                    </Typography>

                    <Typography variant="body1" paragraph>
                        After every ride, we encourage you to wipe the residual sweat from the surface of the interior lining. If you use sunblock, makeup, or hair products, you may want to pull out the cheek pads and headliner and give them a quick rinse in the sink.
                    </Typography>

                    <Typography variant="body1" paragraph>
                        Do not use polishes on helmets with matte finish paintwork; simply use a mild detergent and water for cleaning. Heavily soiled areas can be gently cleaned using a soft toothbrush or a cotton swab.
                    </Typography>

                    <Typography variant="body1" paragraph>
                        All removable parts of the interior comfort liner should be removed and washed by hand. Fixed padding should be wiped with a damp cloth, again using only a neutral cleaning agent. Antibacterial detergents have proven useful in removing smells.
                    </Typography>

                    <Typography variant="body1" paragraph>
                        Although we recommend changing a helmet every 3 to 5 years, the accumulation of sweat, humidity, and dirt can deteriorate the fabric and stitching, and this may cause odor. Dirt and debris can find their way into the venting of your Soulmate Helmet. It is recommended that you remove any removable pads before using compressed air to blow debris from the ventilation system.
                    </Typography>
                </Box>
            </Grid>
            <Footer />
        </div>
    );
}

export default Warranty;
