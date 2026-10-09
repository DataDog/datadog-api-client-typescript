import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateOverrideRequestData } from "./CreateOverrideRequestData";

/**
 * Request to create one or more on-call schedule overrides. You can create up to 25 overrides in a single request.
 */
export class CreateOverridesRequest {
  /**
   * A list of on-call schedule overrides to create.
   */
  "data": Array<CreateOverrideRequestData>;
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
    data: {
      baseName: "data",
      type: "Array<CreateOverrideRequestData>",
      required: true,
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
    return CreateOverridesRequest.attributeTypeMap;
  }

  public constructor() {}
}
