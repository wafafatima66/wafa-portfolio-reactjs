// usePortfolioData.js - Supabase version
import { useEffect, useState } from "react";
import supabase from "./supabase";

export function usePortfolioData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        
        // Fetch all data in parallel for better performance
        const [
          { data: aboutMe, error: aboutMeError },
          { data: academicProjects, error: academicProjectsError },
          { data: projects, error: projectsError },
          { data: testimonials, error: testimonialsError },
          { data: stats, error: statsError },
          { data: academicBackground, error: academicBackgroundError },
          { data: timelineData, error: timelineDataError },
          { data: technologies, error: technologiesError },
          { data: courses, error: coursesError },
          { data: ongoingTasks, error: ongoingTasksError }
        ] = await Promise.all([
          supabase.from('about_me').select('*').single(),
          supabase.from('academic_projects').select('*').eq('status', 'Active').order('id'),
          supabase.from('projects').select('*').order('created_at', { ascending: false }),
          supabase.from('testimonials').select('*').order('id'),
          supabase.from('stats').select('*').order('id'),
          supabase.from('academic_background').select('*').order('created_at', { ascending: false }),
          supabase.from('timeline_data').select('*').order('sequence_order', { ascending: false }),
          supabase.from('technologies').select('*').order('id'),
          supabase.from('courses').select('*').order('id'),
          supabase.from('ongoing_tasks').select('*').order('created_at', { ascending: false })
        ]);

        // Check for errors
        if (aboutMeError) throw aboutMeError;
        if (academicProjectsError) throw academicProjectsError;
        if (projectsError) throw projectsError;
        if (testimonialsError) throw testimonialsError;
        if (statsError) throw statsError;
        if (academicBackgroundError) throw academicBackgroundError;
        if (timelineDataError) throw timelineDataError;
        if (technologiesError) throw technologiesError;
        if (coursesError) throw coursesError;
        if (ongoingTasksError) throw ongoingTasksError;

        // Transform data to match expected structure
        const portfolioData = {
          aboutMe: aboutMe ? {
            biography: aboutMe.biography,
            services: aboutMe.services,
            contact: {
              email: aboutMe.contact_email
            },
            stats: stats || [],
            profileImage: aboutMe.profile_image
          } : null,
          
          academicProjects: academicProjects?.map((proj, index) => ({
            id: index,
            role: proj.role,
            // Support new column name `title`; fallback to `company` for legacy rows
            title: proj.title ?? proj.company ?? null,
            company: proj.company ?? null,
            date: proj.date,
            description: proj.description,
            link: proj.link,
            image: proj.image,
            technologies: proj.technologies,
            status: proj.status
          })) || [],
          
          projects: projects?.map((proj, index) => ({
            id: index,
            role: proj.role,
            company: proj.company,
            date: proj.date,
            description: proj.description,
            longDescription: proj.long_description,
            basicInfo: proj.basic_info,
            link: proj.link,
            image: proj.image,
            technologies: proj.technologies,
            featured: proj.featured,
            theme: proj.theme,
            casestudyImages: proj.casestudy_images,
            createdAt: proj.created_at
          })) || [],
          
          testimonials: testimonials?.map((test, index) => ({
            id: index,
            name: test.name,
            title: test.title,
            text: test.text,
            image: test.image
          })) || [],
          
          stats: stats?.map((stat, index) => ({
            id: index,
            heading: stat.heading,
            value: stat.value
          })) || [],
          
          academicBackground: academicBackground?.map((bg, index) => ({
            id: index,
            title: bg.title,
            institution: bg.institution,
            type: bg.type,
            text: bg.text,
            result: bg.result,
            orderSequence: bg.order_sequence,
            createdAt: bg.created_at
          })) || [],
          
          timelineData: timelineData?.map((timeline, index) => ({
            id: index,
            date: timeline.date,
            title: timeline.title,
            location: timeline.location,
            description: timeline.description,
            link: timeline.link,
            sequenceOrder: timeline.sequence_order
          })) || [],
          
          technologies: technologies?.map((tech, index) => ({
            id: index,
            name: tech.name,
            experience: tech.experience,
            duration: tech.duration,
            icon: tech.icon
          })) || [],
          
          courses: courses?.map((course, index) => ({
            id: index,
            name: course.name,
            institution: course.institution,
            year: course.year,
            description: course.description,
            skills: course.skills
          })) || [],

          ongoingTasks: ongoingTasks?.map((task, index) => ({
            id: index,
            title: task.title,
            description: task.description,
            category: task.category,
            status: task.status,
            icon: task.icon,
            color: task.color,
            link: task.link,
            progress: task.progress,
            startDate: task.start_date,
            createdAt: task.created_at
          })) || []
        };

        setData(portfolioData);
      } catch (err) {
        console.error('Error fetching portfolio data:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, loading, error };
}