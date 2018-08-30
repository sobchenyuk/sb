import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

// components
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import FeaturesComponent from '../../components/FeaturesComponent';
import classNames from 'classnames';
import { IS_MOBILE } from 'consts/browser';

// svg
import Canada from './svg-icons/Canada';
import Germany from './svg-icons/Germany';
import UnitedKingdom from './svg-icons/UnitedKingdom';
import Usa from './svg-icons/Usa';

// styles
import {
  styles,
  stylesComponent,
} from './styles';


@injectSheet(styles)
export default class MultipleSources extends PureComponent {
  static propTypes = {
    classes: PropTypes.shape(), // eslint-disable-line react/require-default-props
  };
  state = {
    selected: [],
    map: [],
    last: false,
  };
  componentWillUpdate(nextProps, nextState) {
    const { map, last } = this.state;
    if (!last) {
      let maps = map;
      const state = nextState.selected[0];
      if (map.length === 0) {
        maps.push(state);
      } else {
        if (typeof state !== 'undefined') {
          for (const key of map) {
            if (key !== state) {
              maps.push(state);
            }
          }
        }
      }
      this.setState({
        map: maps,
      });
      maps = [];
    }
  }
  isSelected = index => this.state.selected.indexOf(index) !== -1;
  handleRowSelection = (selectedRows) => {
    this.setState({
      selected: selectedRows,
    });
    if (selectedRows[0] === 2) {
      this.setState({
        last: true,
      });
    }
  };
  fadeClass = (index) => {
    const { map, last } = this.state;
    let bool = false;
    if (!last) {
      const uniq = Array.from(new Set(map));
      for (const key of uniq) {
        if (key === index) {
          bool = true;
        }
      }
    } else {
      bool = true;
    }
    return bool;
  }

  render() {
    const { classes } = this.props;
    const { selected } = this.state;
    return (
      <div className={classes.parent}>
        <div className={classNames(classes.row, { [`${classes.rowMobile}`]: IS_MOBILE })}>
          <div className={classes.column}>
            <h3 className={classNames(classes.title, { [`${classes.titleMobile}`]: IS_MOBILE })}>
              Tired of jumping between accounts?
              <span className={classes.titleBold}>
                    Good thing you’re here!
              </span>
            </h3>

            <div>
              <p className={classNames(classes.content, { [`${classes.contentMobile}`]: IS_MOBILE })}>
                <span>
                  As many of us know by now - in a lot of cases eBay sellers own multiple eBay accounts and stores, some
                  even sell on their own WooCommerce/Magento websites.
                </span>
              </p>
              <p className={classNames(classes.content, { [`${classes.contentMobile}`]: IS_MOBILE })}>
                <span>
                  Since we know how time-consuming jumping between different accounts and platforms to answer inquiries
                  can be, in Subivi you can connect an unlimited amount of eBay stores and Gmail accounts, so that all of
                  your tickets will appear in 1 place.
                </span>
              </p>
            </div>
          </div>
          <div className={classes.column}>
            <FeaturesComponent
              propsClassName={
                classNames({ [`${classes.featuresComponentResponsive}`]: IS_MOBILE })
               }
            >
              <div className={classNames({ [`${classes.tableResponsive}`]: IS_MOBILE })}>
                <Table
                  style={stylesComponent.table.style}
                  onRowSelection={this.handleRowSelection}
                  className={classNames({ [`${classes.table}`]: IS_MOBILE })}
                  wrapperStyle={stylesComponent.table.wrapperStyle}
                >
                  <TableBody
                    className="TableBody"
                    displayRowCheckbox={false}
                  >
                    <TableRow
                      className="fadeInRight"
                      style={
                        IS_MOBILE ? stylesComponent.tableRowHMobile : stylesComponent.tableRowH
                      }
                      selected={this.isSelected(0)}
                    >
                      <TableRowColumn
                        style={
                          selected[0] === 0 ? stylesComponent.tableRowActive : stylesComponent.tableRow
                        }
                      >
                        <Checkbox
                          checked={selected[0] === 0}
                        />
                      </TableRowColumn>
                      <TableRowColumn
                        style={
                          selected[0] === 0 ? stylesComponent.tableRowColumnFlagActive : stylesComponent.tableRowColumnFlag
                        }
                      >
                        <div className={classes.columns}>
                          <div className={classes.text}>
                            <span className={classes.textRed}>
                              e
                            </span>
                            <span className={classes.textBlue}>
                              b
                            </span>
                          </div>
                          <div className={classes.flag}>
                            <Canada
                              viewBox="0 0 640 480"
                              width="35px"
                              height="auto"
                            />
                          </div>
                          <div className="text">
                            Shoe4u
                          </div>
                        </div>
                      </TableRowColumn>
                      <TableRowColumn
                        style={
                          selected[0] === 0 ? stylesComponent.tableRowColumnActive : stylesComponent.tableRowColumn
                        }
                      >
                        Shoes store
                      </TableRowColumn>
                      <TableRowColumn
                        style={{
                          ...(stylesComponent.tableRowColumnBold),
                          ...(selected[0] === 0 ? stylesComponent.tableRowColumnActive : stylesComponent.tableRowColumn),
                        }}
                      >
                        5860$
                      </TableRowColumn>
                    </TableRow>
                    <TableRow
                      className={classNames({ fadeInRight: this.fadeClass(0), [classes.hidden]: !this.fadeClass(0) })}
                      style={
                        IS_MOBILE ? stylesComponent.tableRowHMobile : stylesComponent.tableRowH
                      }
                      selected={this.isSelected(1)}
                    >
                      <TableRowColumn
                        style={
                          selected[0] === 1 ? stylesComponent.tableRowActive : stylesComponent.tableRow
                        }
                      >
                        <Checkbox
                          checked={selected[0] === 1}
                        />
                      </TableRowColumn>
                      <TableRowColumn
                        style={
                          selected[0] === 1 ? stylesComponent.tableRowColumnFlagActive : stylesComponent.tableRowColumnFlag
                        }
                      >
                        <div className={classes.columns}>
                          <div className={classes.text}>
                            <span className={classes.textRed}>
                              e
                            </span>
                            <span className={classes.textBlue}>
                              b
                            </span>
                          </div>
                          <div className={classes.flag}>
                            <Germany
                              viewBox="0 0 35 23"
                              widths="35px"
                              height="23px"
                            />
                          </div>
                          <div className="text">
                            AutoMshop
                          </div>
                        </div>
                      </TableRowColumn>
                      <TableRowColumn
                        style={
                          selected[0] === 1 ? stylesComponent.tableRowColumnActive : stylesComponent.tableRowColumn
                        }
                      >
                        Automotive replacements
                      </TableRowColumn>
                      <TableRowColumn
                        style={{
                          ...(stylesComponent.tableRowColumnBold),
                          ...(selected[0] === 1 ? stylesComponent.tableRowColumnActive : stylesComponent.tableRowColumn),
                        }}
                      >
                        12803$
                      </TableRowColumn>
                    </TableRow>
                    <TableRow
                      className={classNames({ fadeInRight: this.fadeClass(1), [classes.hidden]: !this.fadeClass(1) })}
                      style={
                        IS_MOBILE ? stylesComponent.tableRowHMobile : stylesComponent.tableRowH
                      }
                      selected={this.isSelected(2)}
                    >
                      <TableRowColumn
                        style={
                          selected[0] === 2 ? stylesComponent.tableRowActive : stylesComponent.tableRow
                        }
                      >
                        <Checkbox
                          checked={selected[0] === 2}
                        />
                      </TableRowColumn>
                      <TableRowColumn
                        style={
                          selected[0] === 2 ? stylesComponent.tableRowColumnFlagActive : stylesComponent.tableRowColumnFlag
                        }
                      >
                        <div className={classes.columns}>
                          <div className={classes.text}>
                            <span className={classes.textRed}>
                              e
                            </span>
                            <span className={classes.textBlue}>
                              b
                            </span>
                          </div>
                          <div className={classes.flag}>
                            <UnitedKingdom
                              viewBox="0 0 35 23"
                              widths="35px"
                              height="23px"
                            />
                          </div>
                          <div className="text">
                            Cloth&hip
                          </div>
                        </div>
                      </TableRowColumn>
                      <TableRowColumn
                        style={
                          selected[0] === 2 ? stylesComponent.tableRowColumnActive : stylesComponent.tableRowColumn
                        }
                      >
                        Clothing
                      </TableRowColumn>
                      <TableRowColumn
                        style={{
                          ...(stylesComponent.tableRowColumnBold),
                          ...(selected[0] === 2 ? stylesComponent.tableRowColumnActive : stylesComponent.tableRowColumn),
                        }}
                      >
                        8952$
                      </TableRowColumn>
                    </TableRow>
                    <TableRow
                      className={classNames({ fadeInRight: this.fadeClass(2), [classes.hidden]: !this.fadeClass(2) })}
                      style={
                        IS_MOBILE ? stylesComponent.tableRowHMobile : stylesComponent.tableRowH
                      }
                      selected={this.isSelected(3)}
                    >
                      <TableRowColumn
                        style={
                          selected[0] === 3 ? stylesComponent.tableRowActive : stylesComponent.tableRow
                        }
                      >
                        <Checkbox
                          checked={selected[0] === 3}
                        />
                      </TableRowColumn>
                      <TableRowColumn
                        style={
                          selected[0] === 3 ? stylesComponent.tableRowColumnFlagActive : stylesComponent.tableRowColumnFlag
                        }
                      >
                        <div className={classes.columns}>
                          <div className={classes.text}>
                            <span className={classes.textRed}>
                              e
                            </span>
                            <span className={classes.textBlue}>
                              b
                            </span>
                          </div>
                          <div className={classes.flag}>
                            <Usa
                              viewBox="0 0 640 480"
                              width="35px"
                              height="auto"
                            />
                          </div>
                          <div className="text">
                            C-electronics
                          </div>
                        </div>
                      </TableRowColumn>
                      <TableRowColumn
                        style={
                          selected[0] === 3 ? stylesComponent.tableRowColumnActive : stylesComponent.tableRowColumn
                        }
                      >
                        Computers
                      </TableRowColumn>
                      <TableRowColumn
                        style={{
                          ...(stylesComponent.tableRowColumnBold),
                          ...(selected[0] === 3 ? stylesComponent.tableRowColumnActive : stylesComponent.tableRowColumn),
                        }}
                      >
                        4623$
                      </TableRowColumn>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </FeaturesComponent>
          </div>
        </div>
      </div>
    );
  }
}
