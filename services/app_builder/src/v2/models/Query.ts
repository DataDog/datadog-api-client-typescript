import { UnparsedObject } from "@datadog/datadog-api-client";

import { ActionQuery } from "./ActionQuery";
import { DataTransform } from "./DataTransform";
import { StateVariable } from "./StateVariable";

/**
 * A data query used by an app. This can take the form of an external action, a data transformation, or a state variable.
 */
export type Query = ActionQuery | DataTransform | StateVariable | UnparsedObject;
