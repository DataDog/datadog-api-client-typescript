import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ActionQueryCondition } from "./ActionQueryCondition";
import { ActionQueryDebounceInMs } from "./ActionQueryDebounceInMs";
import { ActionQueryMockedOutputs } from "./ActionQueryMockedOutputs";
import { ActionQueryOnlyTriggerManually } from "./ActionQueryOnlyTriggerManually";
import { ActionQueryPollingIntervalInMs } from "./ActionQueryPollingIntervalInMs";
import { ActionQueryRequiresConfirmation } from "./ActionQueryRequiresConfirmation";
import { ActionQueryShowToastOnError } from "./ActionQueryShowToastOnError";
import { ActionQuerySpec } from "./ActionQuerySpec";

/**
 * The properties of the action query.
 */
export class ActionQueryProperties {
  /**
   * Whether to run this query. If specified, the query will only run if this condition evaluates to `true` in JavaScript and all other conditions are also met.
   */
  "condition"?: ActionQueryCondition;
  /**
   * The minimum time in milliseconds that must pass before the query can be triggered again. This is useful for preventing accidental double-clicks from triggering the query multiple times.
   */
  "debounceInMs"?: ActionQueryDebounceInMs;
  /**
   * The mocked outputs of the action query. This is useful for testing the app without actually running the action.
   */
  "mockedOutputs"?: ActionQueryMockedOutputs;
  /**
   * Determines when this query is executed. If set to `false`, the query will run when the app loads and whenever any query arguments change. If set to `true`, the query will only run when manually triggered from elsewhere in the app.
   */
  "onlyTriggerManually"?: ActionQueryOnlyTriggerManually;
  /**
   * The post-query transformation function, which is a JavaScript function that changes the query's `.outputs` property after the query's execution.
   */
  "outputs"?: string;
  /**
   * If specified, the app will poll the query at the specified interval in milliseconds. The minimum polling interval is 15 seconds. The query will only poll when the app's browser tab is active.
   */
  "pollingIntervalInMs"?: ActionQueryPollingIntervalInMs;
  /**
   * Whether to prompt the user to confirm this query before it runs.
   */
  "requiresConfirmation"?: ActionQueryRequiresConfirmation;
  /**
   * Whether to display a toast to the user when the query returns an error.
   */
  "showToastOnError"?: ActionQueryShowToastOnError;
  /**
   * The definition of the action query.
   */
  "spec": ActionQuerySpec;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    condition: {
      baseName: "condition",
      type: "ActionQueryCondition",
    },
    debounceInMs: {
      baseName: "debounceInMs",
      type: "ActionQueryDebounceInMs",
    },
    mockedOutputs: {
      baseName: "mockedOutputs",
      type: "ActionQueryMockedOutputs",
    },
    onlyTriggerManually: {
      baseName: "onlyTriggerManually",
      type: "ActionQueryOnlyTriggerManually",
    },
    outputs: {
      baseName: "outputs",
      type: "string",
    },
    pollingIntervalInMs: {
      baseName: "pollingIntervalInMs",
      type: "ActionQueryPollingIntervalInMs",
    },
    requiresConfirmation: {
      baseName: "requiresConfirmation",
      type: "ActionQueryRequiresConfirmation",
    },
    showToastOnError: {
      baseName: "showToastOnError",
      type: "ActionQueryShowToastOnError",
    },
    spec: {
      baseName: "spec",
      type: "ActionQuerySpec",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ActionQueryProperties.attributeTypeMap;
  }

  public constructor() {}
}
