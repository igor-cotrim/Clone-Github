import React from 'react';
import {Link} from 'react-router-dom'

import { 
  Container, 
  Breadcrumb, 
  RepoIcon, 
  Stats, 
  StarIcon, 
  ForkIcon, 
  LinkButton, 
  GithubIcon, 
} from './styles';


const Repo: React.FC = () => {
  return(
    <Container>
      <Breadcrumb>
        <RepoIcon/>
        <Link className={'username'} to={'/igorcotrim'}>
          igorcotrim
        </Link>

        <span>/</span>

        <Link className={'reponame'} to={'/CloneNetflix'}>
          CloneNetflix
        </Link>
      </Breadcrumb>

      <p>Clone da home da netflix.</p>

      <Stats>
        <li>
          <StarIcon/>
          <b>4</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon/>
          <b>2</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={'https://github.com/igor-cotrim/CloneNetflix'}>
        <GithubIcon/>
        <span>View on Github</span>
      </LinkButton>
    </Container>
  )
}

export default Repo;