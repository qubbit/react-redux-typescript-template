import React from 'react';
import { connect } from 'react-redux';
import { fetchSimilarArtists as fetchSimilarArtistsAction } from './actions/artists';

type TextInputEvent = React.ChangeEvent<HTMLInputElement>;

export interface DispatchProps {
  fetchSimilarArtists: Function;
}
export interface OwnProps {}
export interface StateProps {}

export interface State {
  artistName: string;
}

type Props = StateProps & DispatchProps & OwnProps;

export class LastFm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { artistName: '' };
    this.handleSearch = this.handleSearch.bind(this);
  }

  renderInput() {
    return (
      <input
        type="search"
        value={this.state.artistName}
        onChange={(e: TextInputEvent) => {
          this.setState({ artistName: e.target.value });
        }}
        onKeyPress={event => {
          if (event.key === 'Enter') {
            this.handleSearch();
          }
        }}
      />
    );
  }
  render() {
    return <div>{this.renderInput()}</div>;
  }

  async handleSearch() {
    const { artistName } = this.state;
    await this.props.fetchSimilarArtists(artistName);
  }
}

function mapState(state: any) {
  const { artists } = state;
  return { artists: artists.total };
}

function mapDispatch() {
  return { fetchSimilarArtists: fetchSimilarArtistsAction };
}

export default connect<StateProps, DispatchProps, OwnProps>(
  mapState,
  mapDispatch
)(LastFm);
