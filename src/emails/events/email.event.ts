export class EmailEvent {
  constructor(
    public readonly to: string,
    public readonly template: string,
    public readonly context: Record<string, any>,
    public readonly subject?: string,
  ) {}
}
