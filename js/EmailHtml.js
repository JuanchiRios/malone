import React from 'react'
import {Box, Email, Image, Item, Span, A, renderEmail, injectReactEmailAttributes} from 'react-html-email'

injectReactEmailAttributes();

const EmailHtml = renderEmail(
    <Email title="Hello World!">
        <Item align="center">
      <Span fontSize={20}>
        This is an example email made with:
        <A href="https://github.com/chromakode/react-html-email">react-html-email</A>.
      </Span>
        </Item>
    </Email>
)

export default EmailHtml;