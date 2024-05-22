import {
	Briefcase,
    ListTask,
    Archive,
    Bullseye
} from 'react-bootstrap-icons';

export const ProjectsStats = [
    {
       id:1,
       title : "New",
       value : 1,
       icon: <Briefcase size={18}/>,
       statInfo: '<span className="text-dark me-2">2</span> Unread Deals' 
    },
    {
        id:2,
        title : "Active",
        value : 4,
        icon: <ListTask size={18}/>,
        statInfo: '<span className="text-dark me-2">3</span> New Tasks' 
     },
     {
         id:2,
         title : "Archived",
         value : 6,
         icon: <Archive size={18}/>,
         statInfo: '<span className="text-dark me-2">  </span> No Updates' 
      },
];
export default ProjectsStats;
