import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';
import KeyboardArrowRightRounded from '@mui/icons-material/KeyboardArrowRightRounded';
import KeyboardArrowDownRounded from '@mui/icons-material/KeyboardArrowDownRounded';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetail from '@mui/material/AccordionDetails';
import OurValues from 'docs/src/components/about/OurValues';
import Link from 'docs/src/modules/components/Link';
import AppHeader from 'docs/src/layouts/AppHeader';
import AppFooter from 'docs/src/layouts/AppFooter';
import GradientText from 'docs/src/components/typography/GradientText';
import IconImage from 'docs/src/components/icon/IconImage';
import BrandingCssVarsProvider from 'docs/src/BrandingCssVarsProvider';
import Section from 'docs/src/layouts/Section';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import Head from 'docs/src/modules/components/Head';
import ROUTES from 'docs/src/route';
import AppHeaderBanner from 'docs/src/components/banner/AppHeaderBanner';

interface RoleProps {
  description: string;
  title: string;
  url?: string;
}

function Role(props: RoleProps) {
  if (props.url) {
    return (
      <Box
        component="div"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'start',
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        <span>
          <Typography variant="body1" color="text.primary" fontWeight="semiBold" gutterBottom>
            {props.title}
          </Typography>
          <Typography component="p" color="text.secondary" sx={{ maxWidth: 700 }}>
            {props.description}
          </Typography>
        </span>
        <Button
          component="a"
          // @ts-expect-error
          variant="link"
          size="small"
          href={props.url}
          endIcon={<KeyboardArrowRightRounded />}
        >
          More about this role
        </Button>
      </Box>
    );
  }

  return (
    <div>
      <Typography variant="body1" color="text.primary" fontWeight={700} sx={{ my: 1 }}>
        {props.title}
      </Typography>
      <Typography color="text.secondary" sx={{ maxWidth: 700 }}>
        {props.description}
      </Typography>
    </div>
  );
}

const Accordion = styled(MuiAccordion)(({ theme }) => ({
  padding: theme.spacing(2),
  transition: theme.transitions.create('box-shadow'),
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    boxShadow: '0 4px 8px 0 rgb(90 105 120 / 20%)',
  },
  '&:not(:last-of-type)': {
    marginBottom: theme.spacing(2),
  },
  '&:before': {
    display: 'none',
  },
  '&:after': {
    display: 'none',
  },
}));

const AccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
  padding: theme.spacing(2),
  margin: theme.spacing(-2),
  minHeight: 'auto',
  '&.Mui-expanded': {
    minHeight: 'auto',
  },
  '& .MuiAccordionSummary-content': {
    margin: 0,
    paddingRight: theme.spacing(2),
    '&.Mui-expanded': {
      margin: 0,
    },
  },
}));

const AccordionDetails = styled(MuiAccordionDetail)(({ theme }) => ({
  marginTop: theme.spacing(1),
  padding: 0,
}));

const faqData = [
  {
    summary: 'Are there application deadlines?',
    detail: 'No. If a job is visible on our careers page, then you can still apply.',
  },
  {
    summary: 'Does MUI do whiteboarding during interviews?',
    detail:
      'No. We ask applicants to complete challenges that are close to their future day-to-day contributions.',
  },
  {
    summary: 'Does MUI offer contract job opportunities?',
    detail:
      'Yes. People outside of France can be hired as full-time contractors. (Benefits may vary.)',
  },
];

const openRolesData = [
  {
    title: 'Engineering',
    roles: [
      {
        title: 'Product Engineer - Store',
        description:
          'You will lead the technical, product, and operational development of the store.',
        url: '/careers/product-engineer/',
      },
      {
        title: 'React Engineer - xCharts',
        description:
          'You will help form the xCharts team, build ambitious and complex new features, work on strategic problems, and help grow adoption.',
        url: '/careers/react-engineer-x-charts/',
      },
      {
        title: 'React Engineer - X',
        description:
          'You will strengthen the MUI X product, build ambitious and complex new features, work on strategic problems, and help grow adoption.',
        url: '/careers/react-engineer-x/',
      },
    ],
  },
];

const nextRolesData = [
  {
    title: 'Engineering',
    roles: [
      {
        title: 'Accessibility Engineer',
        description:
          'You will become our go-to expert for accessibility, to ensure all products meet or exceed WCAG 2.1 level AA guidelines.',
        url: '/careers/accessibility-engineer/',
      },
      {
        title: 'Full-stack Engineer - Toolpad',
        description:
          'You will join the MUI Toolpad team, to explore the role of MUI in the low code space and help bring the early prototype to a usable product.',
        url: '/careers/fullstack-engineer/',
      },
      // {
      //   title: 'React Engineer - X',
      //   description:
      //     'You will strengthen the MUI X product, build ambitious and complex new features, work on strategic problems, and help grow adoption.',
      //   url: '/careers/react-engineer-x/',
      // },
      {
        title: 'React Tech Lead - Core',
        description:
          'You will lead the development of MUI Core, positioning the library as the industry standard for design teams while doubling its adoption.',
        url: '/careers/react-tech-lead-core/',
      },
      {
        title: 'React Engineer - Core',
        description:
          'You will strengthen the core components team by collaborating with the community to land contributions.',
        url: '/careers/react-engineer-core/',
      },
      {
        title: 'React Community Engineer - X',
        description:
          'You will provide guidance to the community and solve their struggle, working primarily in the advanced components team.',
        url: '/careers/react-community-engineer/',
      },
    ],
  },
  {
    title: 'Design',
    roles: [
      {
        title: 'Design Engineer',
        description: 'You will focus on design to implement great product experiences.',
        url: '/careers/design-engineer/',
      },
    ],
  },
  {
    title: 'People',
    roles: [
      {
        title: 'Technical Recruiter',
        description: 'You will hire the next engineers, among other roles, joining the team.',
        url: '/careers/technical-recruiter/',
      },
    ],
  },
  {
    title: 'Sales',
    roles: [
      {
        title: 'Account Executive',
        description:
          'You will build client relationships and manage the sales process from start to finish.',
      },
    ],
  },
  {
    title: 'Support',
    roles: [
      {
        title: 'Support Agent',
        description:
          'You will provide support for the customers. You will directly impact customer satisfaction and success.',
      },
    ],
  },
  {
    title: 'Marketing',
    roles: [
      {
        title: 'Product Marketing Manager',
        description: 'You will own the marketing efforts at MUI.',
        url: '/careers/product-marketing-manager/',
      },
    ],
  },
] as typeof openRolesData;

function renderFAQItem(index: number, defaultExpanded?: boolean) {
  const faq = faqData[index];
  return (
    <Accordion variant="outlined" defaultExpanded={defaultExpanded}>
      <AccordionSummary
        expandIcon={<KeyboardArrowDownRounded sx={{ fontSize: 20, color: 'primary.main' }} />}
      >
        <Typography variant="body2" fontWeight="bold" component="h3">
          {faq.summary}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          component="div"
          variant="body2"
          color="text.secondary"
          sx={{ '& ul': { pl: 2 } }}
        >
          {faq.detail}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

function CareersContent() {
  return (
    <React.Fragment>
      {/* Hero */}
      <Section cozy>
        <SectionHeadline
          alwaysCenter
          overline="Join us"
          title={
            <Typography variant="h2" sx={{ maxWidth: 600, mx: 'auto' }}>
              Build <GradientText>the next generation</GradientText>
              <br /> of tools for UI development
            </Typography>
          }
          description="Together, we are enabling developers & designers to bring stunning UIs to life with unrivalled speed and ease."
        />
      </Section>
      <Divider />
      <OurValues />
      <Divider />
      {/* Perks & benefits */}
      <Section bg="gradient" cozy>
        <Grid container spacing={5} alignItems="center">
          <Grid item md={6}>
            <SectionHeadline
              overline="Working at MUI"
              title={<Typography variant="h2">Perks & benefits</Typography>}
              description="To help you go above and beyond with us, we provide:"
            />
            {[
              ['100% remote work:', 'Our entire company is globally distributed.'],
              [
                'Retreats:',
                'We meet up every 8 months for a week of working & having fun together!',
              ],
              [
                'Equipment:',
                'We provide the hardware of your choice (initial grant of $2,500 USD).',
              ],
              ['Time off:', 'We provide 33 days of paid time off globally.'],
            ].map((textArray) => (
              <Box key={textArray[0]} sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <IconImage name="pricing/yes" />
                <Typography variant="body2" color="text.primary" sx={{ ml: 1 }}>
                  <span style={{ fontWeight: 600 }}>{`${textArray[0]}  `}</span>
                  {textArray[1]}
                </Typography>
              </Box>
            ))}
          </Grid>
          <Grid item xs={12} md={6} container>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
              <Paper
                component={Link}
                href={ROUTES.handbook}
                noLinkStyle
                variant="outlined"
                sx={{ p: 2, width: '100%' }}
              >
                <Typography variant="body2" fontWeight="bold" sx={{ mb: 0.5 }}>
                  Handbook
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  Learn everything about how MUI as a company is run.
                </Typography>
                <Typography
                  sx={(theme) => ({
                    color: 'primary.600',
                    ...theme.applyDarkStyles({
                      color: 'primary.400',
                    }),
                  })}
                  variant="body2"
                  fontWeight="bold"
                >
                  Learn more{' '}
                  <KeyboardArrowRightRounded fontSize="small" sx={{ verticalAlign: 'middle' }} />
                </Typography>
              </Paper>
              <Paper
                component={Link}
                href={ROUTES.blog}
                noLinkStyle
                variant="outlined"
                sx={{ p: 2, width: '100%' }}
              >
                <Typography variant="body2" fontWeight="bold" sx={{ mb: 0.5 }}>
                  Blog
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  Check behind the scenes and news from the company.
                </Typography>
                <Typography
                  sx={(theme) => ({
                    color: 'primary.600',
                    ...theme.applyDarkStyles({
                      color: 'primary.400',
                    }),
                  })}
                  variant="body2"
                  fontWeight="bold"
                >
                  Learn more{' '}
                  <KeyboardArrowRightRounded fontSize="small" sx={{ verticalAlign: 'middle' }} />
                </Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Section>
      <Divider />
      {/* Open roles */}
      <Section cozy>
        <SectionHeadline
          title={
            <Typography variant="h2" id="open-roles" gutterBottom>
              Open roles
              <Badge
                badgeContent={openRolesData.reduce((acc, item) => acc + item.roles.length, 0)}
                color="success"
                showZero
                sx={{ ml: 3 }}
              />
            </Typography>
          }
          description="The company is bootstrapped (so far). It was incorporated in mid-2019 and is growing fast (x2 YoY). We doubled the team in 2020 (6), and kept a similar pace since: 2021 (15), 2022 (25). We plan to reach 40 people in 2023. We're looking for help to
          grow in the following areas:"
        />
        <Divider sx={{ my: { xs: 2, sm: 4 } }} />
        <Stack
          spacing={2}
          divider={
            <Divider
              sx={(theme) => ({
                my: { xs: 1, sm: 2 },
                borderColor: 'grey.100',
                ...theme.applyDarkStyles({
                  borderColor: 'primaryDark.600',
                }),
              })}
            />
          }
        >
          {openRolesData.map((category) => {
            const roles = category.roles;
            return (
              <React.Fragment key={category.title}>
                <Typography component="h3" variant="h5" fontWeight="extraBold">
                  {category.title}
                </Typography>
                {roles.length > 0 ? (
                  roles.map((role) => (
                    <Role
                      key={role.title}
                      title={role.title}
                      description={role.description}
                      url={role.url}
                    />
                  ))
                ) : (
                  <Typography color="text.secondary">No open roles.</Typography>
                )}
              </React.Fragment>
            );
          })}
        </Stack>
      </Section>
      <Divider />
      {/* Next roles */}
      {nextRolesData.length > 0 && (
        <Box data-mui-color-scheme="dark" sx={{ bgcolor: 'primaryDark.900' }}>
          <Section bg="transparent">
            <SectionHeadline
              title={
                <Typography variant="h2" id="next-roles" gutterBottom>
                  Next roles
                </Typography>
              }
              description={
                <React.Fragment>
                  We hire in batches, we collect applications a few months before we actively aim to
                  fill the roles. If none of them fit with what you are looking for, apply to the{' '}
                  <Link href="https://jobs.ashbyhq.com/MUI/4715d81f-d00f-42d4-a0d0-221f40f73e19/application?utm_source=ZNRrPGBkqO">
                    Dream job
                  </Link>{' '}
                  role.
                </React.Fragment>
              }
            />
            <Divider sx={{ my: { xs: 2, sm: 4 } }} />
            <Stack spacing={2} divider={<Divider sx={{ my: { xs: 1, sm: 2 } }} />}>
              {nextRolesData.map((category) => {
                const roles = category.roles;
                return (
                  <React.Fragment key={category.title}>
                    <Typography component="h3" variant="h5" fontWeight="extraBold">
                      {category.title}
                    </Typography>
                    {roles.length > 0 ? (
                      roles.map((role) => (
                        <Role
                          key={role.title}
                          title={role.title}
                          description={role.description}
                          url={role.url}
                        />
                      ))
                    ) : (
                      <Typography color="text.secondary">No plans yet.</Typography>
                    )}
                  </React.Fragment>
                );
              })}
            </Stack>
          </Section>
        </Box>
      )}
      <Divider />
      {/* Frequently asked questions */}
      <Section bg="transparent">
        <Typography variant="h2" sx={{ mb: { xs: 2, sm: 4 } }}>
          Frequently asked questions
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            {renderFAQItem(0, true)}
            {renderFAQItem(1)}
          </Grid>
          <Grid item xs={12} md={6}>
            {renderFAQItem(2)}
            <Paper
              variant="outlined"
              sx={(theme) => ({
                p: 2,
                borderStyle: 'dashed',
                borderColor: 'divider',
                bgcolor: 'white',
                ...theme.applyDarkStyles({
                  bgcolor: 'primaryDark.800',
                }),
              })}
            >
              <Box sx={{ textAlign: 'left' }}>
                <Typography variant="body2" color="text.primary" fontWeight="bold">
                  Got any questions unanswered or need more help?
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ my: 1, textAlign: 'left' }}>
                We&apos;re to help you with any other question you have about our hiring process.
              </Typography>
              <Link href="mailto:job@mui.com" variant="body2">
                Contact us <KeyboardArrowRightRounded fontSize="small" />
              </Link>
            </Paper>
          </Grid>
        </Grid>
      </Section>
    </React.Fragment>
  );
}

export default function Careers() {
  return (
    <BrandingCssVarsProvider>
      <Head
        title="Careers - MUI"
        description="Interested in joining MUI? Learn about the roles we're hiring for."
      />
      <AppHeaderBanner />
      <AppHeader />
      <main id="main-content">
        <CareersContent />
      </main>
      <Divider />
      <AppFooter />
    </BrandingCssVarsProvider>
  );
}
