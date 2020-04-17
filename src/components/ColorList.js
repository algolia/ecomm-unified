import React from 'react';
import { connectRefinementList } from 'react-instantsearch-dom';

import './ColorList.scss';
import { UncontrolledSearchBox } from './SearchBox/UncontrolledSearchBox';
import { PartialHighlight } from './PartialHighlight';

export const ColorList = connectRefinementList((props) => {
  const [query, setQuery] = React.useState('');
  const inputRef = React.useRef(null);

  props.items.sort((a, b) => {
    if (a.label < b.label) {
      return -1;
    } else {
      return 1;
    }
  });

  return (
    <div className="ColorList ais-RefinementList">
      {props.searchable && (
        <div className="ais-RefinementList-searchBox">
          <UncontrolledSearchBox
            inputRef={inputRef}
            placeholder="Search colors"
            query={query}
            onChange={(event) => {
              const value = event.currentTarget.value;
              setQuery(value);
              props.searchForItems(value);
            }}
            onSubmit={(event) => {
              event.preventDefault();
              event.stopPropagation();

              if (props.isFromSearch && props.items.length > 0) {
                props.refine(props.items[0].value);
                setQuery('');
              }

              if (inputRef.current) {
                inputRef.current.blur();
              }
            }}
            onReset={() => {
              setQuery('');
              props.searchForItems('');

              if (inputRef.current) {
                inputRef.current.focus();
              }
            }}
          />
        </div>
      )}

      <div className="Unified-RefinementList-ListContainer">
        {props.isFromSearch && props.items.length === 0 && (
          <p>No colors found.</p>
        )}

        <ul className="ais-RefinementList-list">
          {props.items.map((item) => {
            const labelParts = item.label.split(';');

            if (labelParts.length !== 2) {
              throw new Error(
                'The Color widget expects colors with the following format: "Aluminium;#7f8084".'
              );
            }

            const [colorName, colorCode] = labelParts;

            return (
              <li
                key={item.label}
                className={[
                  'ais-RefinementList-item',
                  item.isRefined && 'ais-RefinementList-item--selected',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                <label className="ais-RefinementList-label">
                  <input
                    className="ais-RefinementList-checkbox"
                    style={{
                      color: colorCode,
                      backgroundColor: colorCode,
                    }}
                    type="checkbox"
                    value={item.value}
                    checked={item.isRefined}
                    onChange={(event) => {
                      event.preventDefault();
                      props.refine(item.value);
                      setQuery('');
                    }}
                  />
                  <span className="ais-RefinementList-labelText">
                    {props.isFromSearch ? (
                      <PartialHighlight hit={item} attribute="label" />
                    ) : (
                      colorName
                    )}
                  </span>
                  <span className="ais-RefinementList-count">{item.count}</span>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
});