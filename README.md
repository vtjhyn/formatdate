# Date Format

A lightweight date formatter.

## Description

`formatDate` is a lightweight and flexible date formatting library for JavaScript. It allows you to easily format dates into various patterns with support for both 24-hour and 12-hour time formats, including AM/PM indicators.

## Installation

You can install the package via npm:

```bash
npm install @vtjhyn/formatdate
```

## Usage

Import the `formatDate` function and use it to format dates according to your specified pattern.

### Example

```javascript
import { formatDate } from "@vtjhyn/formatdate";

const date = new Date();
const formattedDate = formatDate(date, "YYYY-MM-DD hh:mm:ss A");
console.log(formattedDate); // Output: e.g., "2024-06-19 02:15:30 PM"
```

### Format Patterns

The `formatDate` function supports the following patterns:

- `YYYY`: Full year (e.g., 2024)
- `YY`: Two-digit year (e.g., 24)
- `MM`: Month (01-12)
- `DD`: Day of the month (01-31)
- `hh`: Hour in 12-hour format (01-12)
- `HH`: Hour in 24-hour format (00-23)
- `mm`: Minutes (00-59)
- `ss`: Seconds (00-59)
- `A`: AM/PM indicator

### Example Patterns

```javascript
console.log(formatDate(date, "YYYY-MM-DD")); // Output: e.g., "2024-06-19"
console.log(formatDate(date, "YY-MM-DD")); // Output: e.g., "24-06-19"
console.log(formatDate(date, "hh:mm A")); // Output: e.g., "02:15 PM"
console.log(formatDate(date, "HH:mm:ss")); // Output: e.g., "14:15:30"
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
