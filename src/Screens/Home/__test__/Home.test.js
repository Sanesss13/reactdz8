import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Home } from '../Home';
import { store } from "../../../Store";

describe("test Home component", () => {
  test('find "Служба поддержки" text ', () => {
    render(
      <Provider store={store}><Home /></Provider>
    );
    const linkElement = screen.getByText(/Служба поддержки/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('find "Поддержка" text ', () => {
    render(
      <Provider store={store}><Home /></Provider>
    );
    const linkElement = screen.getByText(/Поддержка/i);
    expect(linkElement).toBeInTheDocument();
  });
});
