import areArraysEqual from './areArraysEqual';

const parseSpans = (text, spans) => {
  let flatSpans = [];

  for (let i = 0;i < text.length;i++) {
    let applicable = [];

    spans.forEach(span => {
      if (span.start <= i && span.end > i) {
        const toPush = {
          type: span.type
        };

        if (span.data) {
          toPush.data = span.data;
        }

        applicable.push(toPush);
      }
    });

    const latestSpan = flatSpans[flatSpans.length - 1];
    if (applicable.length > 0) {
      if (flatSpans.length > 0 && latestSpan.start <= i && areArraysEqual(latestSpan.spans, applicable)) {
        flatSpans[flatSpans.length - 1].end = i + 1;
      } else {
        flatSpans.push({
          start: i,
          end: i + 1,
          spans: applicable,
        });
      }
    }
  }

  let offset = 0;
  flatSpans.forEach(span => {
    const start = text.substring(0, span.start + offset);
    const end = text.substring(span.end + offset);

    let openings = '';
    span.spans.forEach(item => {
      openings += `<${item.type === 'hyperlink' ? 'a href="' + item.data.value.url + '"' : item.type}>`;
    });

    let endings = '';
    span.spans.reverse().forEach(item => {
      endings += `</${item.type === 'hyperlink' ? 'a' : item.type}>`;
    });

    const node = `${openings}${text.substring(span.start + offset, span.end + offset)}${endings}`;
    text = `${start}${node}${end}`;
    offset += openings.length;
    offset += endings.length;
  });

  return text;
}

export default parseSpans;
