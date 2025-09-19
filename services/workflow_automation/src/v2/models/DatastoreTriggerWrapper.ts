import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatastoreTrigger } from "./DatastoreTrigger";

/**
 * Schema for a Datastore-based trigger.
 */
export class DatastoreTriggerWrapper {
  /**
   * Trigger a workflow from a Datastore. For automatic triggering a handle must be configured and the workflow must be published.
   */
  "datastoreTrigger": DatastoreTrigger;
  /**
   * A list of steps that run first after a trigger fires.
   */
  "startStepNames"?: Array<string>;
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
    datastoreTrigger: {
      baseName: "datastoreTrigger",
      type: "DatastoreTrigger",
      required: true,
    },
    startStepNames: {
      baseName: "startStepNames",
      type: "Array<string>",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DatastoreTriggerWrapper.attributeTypeMap;
  }

  public constructor() {}
}
