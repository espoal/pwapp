import { React, useState, useNavigate } from '@vendors/react'


export const SidebarLinkGroup = ({
  children,
  activecondition,
}) => {

  const navigate = useNavigate()

  const [open, setOpen] = useState(activecondition);

  const handleClick = () => {
    setOpen(!open)
    navigate("/dash")
  }

  return (
    <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${activecondition && 'bg-slate-900'}`}>
      {children(handleClick, open)}
    </li>
  )
}
