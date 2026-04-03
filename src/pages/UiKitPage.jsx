import { Button, Card, Badge } from '../components/ui';

export default function UiKitPage() {
  return (
    <div className="page-container" style={{ padding: '2rem', color: 'var(--text-color)' }}>
      <h1>UI Kit (Дизайн-система)</h1>
      <hr style={{ borderColor: 'var(--color-border)', marginBottom: '2rem' }} />

      <section style={{ marginBottom: '3rem' }}>
        <h2>1. Buttons (Кнопки)</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginTop: '1rem' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>2. Badges (Мітки)</h2>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <Badge variant="primary">Новинка</Badge>
          <Badge variant="warning">В кошику</Badge>
        </div>
      </section>

      <section>
        <h2>3. Cards (Картки)</h2>
        <div style={{ maxWidth: '300px', marginTop: '1rem' }}>
          <Card hoverable>
            <Card.Body>
              <h3>Тестова картка</h3>
              <p>Це приклад використання складеного компонента Card із нашої дизайн-системи.</p>
            </Card.Body>
            <Card.Footer>
              <Button variant="secondary" size="sm">Скасувати</Button>
              <Button variant="primary" size="sm">ОК</Button>
            </Card.Footer>
          </Card>
        </div>
      </section>
    </div>
  );
}