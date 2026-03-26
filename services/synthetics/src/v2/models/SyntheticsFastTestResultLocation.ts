import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Location from which the fast test was executed.
 */
export class SyntheticsFastTestResultLocation {
  /**
   * ID of the location.
   */
  "id"?: string;
  /**
   * Display name of the location.
   */
  "name"?: string;
  /**
   * Agent version running at this location.
   */
  "version"?: string;
  /**
   * Identifier of the specific worker that ran the test.
   */
  "workerId"?: string;
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
    id: {
      baseName: "id",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    version: {
      baseName: "version",
      type: "string",
    },
    workerId: {
      baseName: "worker_id",
      type: "string",
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
    return SyntheticsFastTestResultLocation.attributeTypeMap;
  }

  public constructor() {}
}
