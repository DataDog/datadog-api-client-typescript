import { UnparsedObject } from "@datadog/datadog-api-client";

import { SyntheticsAssertionBodyHashTarget } from "./SyntheticsAssertionBodyHashTarget";
import { SyntheticsAssertionJavascript } from "./SyntheticsAssertionJavascript";
import { SyntheticsAssertionJSONPathTarget } from "./SyntheticsAssertionJSONPathTarget";
import { SyntheticsAssertionJSONSchemaTarget } from "./SyntheticsAssertionJSONSchemaTarget";
import { SyntheticsAssertionTarget } from "./SyntheticsAssertionTarget";
import { SyntheticsAssertionXPathTarget } from "./SyntheticsAssertionXPathTarget";

/**
 * Object describing the assertions type, their associated operator,
 * which property they apply, and upon which target.
 */
export type SyntheticsAssertion =
  | SyntheticsAssertionTarget
  | SyntheticsAssertionBodyHashTarget
  | SyntheticsAssertionJSONPathTarget
  | SyntheticsAssertionJSONSchemaTarget
  | SyntheticsAssertionXPathTarget
  | SyntheticsAssertionJavascript
  | UnparsedObject;
