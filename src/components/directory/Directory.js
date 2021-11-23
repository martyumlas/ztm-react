import MenuItem from '../menu-item/MenuItem';
import './Directory.scss'
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import { connect } from 'react-redux'

const Directory = ({sections}) =>  {

    return (
        <div className="directory-menu">
            {sections.map(section => (
                <MenuItem key={section.id} {...section}/>
            ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)