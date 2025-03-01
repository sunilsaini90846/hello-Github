import { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Switch,
  FormControlLabel,
  Chip,
  Divider,
  useTheme,
} from '@mui/material';
import {
  Check as CheckIcon,
  Close as CloseIcon,
  Info as InfoIcon,
} from '@mui/icons-material';
import React from 'react';

interface PricingTier {
  name: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: {
    name: string;
    included: boolean | string;
    highlight?: boolean;
  }[];
  popular?: boolean;
  buttonText: string;
  buttonVariant: 'outlined' | 'contained';
}

const PricingPage = () => {
  const theme = useTheme();
  const [annualBilling, setAnnualBilling] = useState(true);

  const handleBillingChange = () => {
    setAnnualBilling(!annualBilling);
  };

  const pricingTiers: PricingTier[] = [
    {
      name: 'Free',
      description: 'For personal projects and small teams',
      price: {
        monthly: 0,
        yearly: 0,
      },
      buttonText: 'Sign up for free',
      buttonVariant: 'outlined',
      features: [
        { name: 'Unlimited public repositories', included: true },
        { name: 'Unlimited private repositories', included: true },
        { name: 'Up to 3 collaborators for private repositories', included: true },
        { name: 'GitHub Community Support', included: true },
        { name: 'GitHub Actions (2,000 minutes/month)', included: true },
        { name: 'GitHub Packages (500MB storage)', included: true },
        { name: 'GitHub Pages', included: true },
        { name: 'GitHub Codespaces (60 hours/month)', included: false },
        { name: 'Code scanning', included: false },
        { name: 'Advanced security features', included: false },
      ],
    },
    {
      name: 'Team',
      description: 'For teams that need to collaborate on private repositories',
      price: {
        monthly: 4,
        yearly: 3.67,
      },
      buttonText: 'Start a free trial',
      buttonVariant: 'contained',
      popular: true,
      features: [
        { name: 'Unlimited public repositories', included: true },
        { name: 'Unlimited private repositories', included: true },
        { name: 'Unlimited collaborators', included: true, highlight: true },
        { name: 'GitHub Community Support', included: true },
        { name: 'GitHub Actions (3,000 minutes/month)', included: true },
        { name: 'GitHub Packages (2GB storage)', included: true },
        { name: 'GitHub Pages', included: true },
        { name: 'GitHub Codespaces (90 hours/month)', included: true, highlight: true },
        { name: 'Code scanning (limited)', included: true },
        { name: 'Advanced security features', included: false },
      ],
    },
    {
      name: 'Enterprise',
      description: 'For enterprises that need advanced security and compliance',
      price: {
        monthly: 21,
        yearly: 19.25,
      },
      buttonText: 'Contact sales',
      buttonVariant: 'outlined',
      features: [
        { name: 'Unlimited public repositories', included: true },
        { name: 'Unlimited private repositories', included: true },
        { name: 'Unlimited collaborators', included: true },
        { name: 'Premium Support', included: true, highlight: true },
        { name: 'GitHub Actions (50,000 minutes/month)', included: true, highlight: true },
        { name: 'GitHub Packages (50GB storage)', included: true, highlight: true },
        { name: 'GitHub Pages', included: true },
        { name: 'GitHub Codespaces (180 hours/month)', included: true },
        { name: 'Code scanning (advanced)', included: true, highlight: true },
        { name: 'Advanced security features', included: true, highlight: true },
      ],
    },
  ];

  const featureCategories = [
    {
      name: 'Repositories & Collaboration',
      features: ['Unlimited public repositories', 'Unlimited private repositories', 'Up to 3 collaborators for private repositories', 'Unlimited collaborators'],
    },
    {
      name: 'Support',
      features: ['GitHub Community Support', 'Premium Support'],
    },
    {
      name: 'CI/CD & Storage',
      features: ['GitHub Actions (2,000 minutes/month)', 'GitHub Actions (3,000 minutes/month)', 'GitHub Actions (50,000 minutes/month)', 'GitHub Packages (500MB storage)', 'GitHub Packages (2GB storage)', 'GitHub Packages (50GB storage)', 'GitHub Pages'],
    },
    {
      name: 'Development Tools',
      features: ['GitHub Codespaces (60 hours/month)', 'GitHub Codespaces (90 hours/month)', 'GitHub Codespaces (180 hours/month)'],
    },
    {
      name: 'Security',
      features: ['Code scanning', 'Code scanning (limited)', 'Code scanning (advanced)', 'Advanced security features'],
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          GitHub Pricing & Tiers
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          Compare GitHub plans and find the one that best suits your needs.
        </Typography>

        {/* Billing Toggle */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
          <FormControlLabel
            control={
              <Switch
                checked={annualBilling}
                onChange={handleBillingChange}
                color="primary"
              />
            }
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="body1">
                  {annualBilling ? 'Annual billing' : 'Monthly billing'}
                </Typography>
                {annualBilling && (
                  <Chip
                    label="Save up to 10%"
                    size="small"
                    color="primary"
                    sx={{ ml: 1 }}
                  />
                )}
              </Box>
            }
          />
        </Box>

        {/* Pricing Cards */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {pricingTiers.map((tier) => (
            <Grid
              item
              key={tier.name}
              xs={12}
              sm={6}
              md={4}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  border: tier.popular ? `2px solid ${theme.palette.primary.main}` : undefined,
                  boxShadow: tier.popular ? theme.shadows[10] : theme.shadows[1],
                }}
              >
                {tier.popular && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 12,
                      right: 12,
                      zIndex: 1,
                    }}
                  >
                    <Chip
                      label="Most Popular"
                      color="primary"
                      size="small"
                    />
                  </Box>
                )}
                <CardHeader
                  title={tier.name}
                  subheader={tier.description}
                  titleTypographyProps={{ align: 'center', variant: 'h5' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  sx={{ pb: 0 }}
                />
                <CardContent sx={{ flexGrow: 1, pt: 0 }}>
                  <Box sx={{ textAlign: 'center', my: 2 }}>
                    <Typography component="h2" variant="h3" color="text.primary">
                      ${annualBilling ? tier.price.yearly : tier.price.monthly}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      per user/month
                    </Typography>
                  </Box>
                  <Divider sx={{ my: 2 }} />
                  <Box>
                    {tier.features.map((feature) => (
                      <Box
                        key={feature.name}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          py: 1,
                          backgroundColor: feature.highlight ? alpha(theme.palette.primary.main, 0.1) : undefined,
                          borderRadius: feature.highlight ? 1 : 0,
                          px: feature.highlight ? 1 : 0,
                          my: feature.highlight ? 1 : 0,
                        }}
                      >
                        {typeof feature.included === 'boolean' ? (
                          feature.included ? (
                            <CheckIcon color="success" sx={{ mr: 1 }} />
                          ) : (
                            <CloseIcon color="error" sx={{ mr: 1 }} />
                          )
                        ) : (
                          <InfoIcon color="info" sx={{ mr: 1 }} />
                        )}
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: feature.highlight ? 'bold' : 'regular',
                          }}
                        >
                          {feature.name}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                  <Box sx={{ mt: 3, textAlign: 'center' }}>
                    <Button
                      fullWidth
                      variant={tier.buttonVariant}
                      color="primary"
                    >
                      {tier.buttonText}
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Feature Comparison Table */}
        <Typography variant="h4" gutterBottom>
          Detailed Feature Comparison
        </Typography>
        <TableContainer component={Paper} sx={{ mb: 6 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Feature</TableCell>
                {pricingTiers.map((tier) => (
                  <TableCell key={tier.name} align="center" sx={{ fontWeight: 'bold' }}>
                    {tier.name}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {featureCategories.map((category) => (
                <React.Fragment key={category.name}>
                  <TableRow sx={{ backgroundColor: theme.palette.action.hover }}>
                    <TableCell colSpan={4} sx={{ fontWeight: 'bold' }}>
                      {category.name}
                    </TableCell>
                  </TableRow>
                  {category.features.map((featureName) => (
                    <TableRow key={featureName}>
                      <TableCell>{featureName}</TableCell>
                      {pricingTiers.map((tier) => {
                        const feature = tier.features.find((f) => f.name === featureName);
                        return (
                          <TableCell key={`${tier.name}-${featureName}`} align="center">
                            {feature ? (
                              typeof feature.included === 'boolean' ? (
                                feature.included ? (
                                  <CheckIcon color="success" />
                                ) : (
                                  <CloseIcon color="error" />
                                )
                              ) : (
                                feature.included
                              )
                            ) : (
                              <CloseIcon color="error" />
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  ))}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Additional Information */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" gutterBottom>
            Additional Information
          </Typography>
          <Typography variant="body1" paragraph>
            All plans include unlimited repositories, issue tracking, and project management tools. The main differences are in the number of collaborators, minutes for GitHub Actions, storage for GitHub Packages, and access to advanced security features.
          </Typography>
          <Typography variant="body1" paragraph>
            For large enterprises with specific needs, GitHub also offers custom plans. Contact GitHub sales for more information.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Note: Pricing information is based on GitHub's pricing as of 2023. Please check the official GitHub website for the most up-to-date pricing information.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

// Helper function to create alpha colors
const alpha = (color: string, opacity: number): string => {
  return color + Math.round(opacity * 255).toString(16).padStart(2, '0');
};

export default PricingPage; 