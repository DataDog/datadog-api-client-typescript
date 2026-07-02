import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdateFlakyTestsRequestTestNewState } from "./UpdateFlakyTestsRequestTestNewState";

/**
 * Details of what tests to update and their new attributes.
 */
export class UpdateFlakyTestsRequestTest {
  /**
   * The ID of the flaky test. This is the same ID returned by the Search flaky tests endpoint and is the
   * value of the `@test.fingerprint_fqn` facet on test events. You can find it by searching on
   * `@test.fingerprint_fqn` in the Test Optimization Explorer, or by filtering the Search flaky tests
   * endpoint with the `fingerprint_fqn` key.
   */
  "id": string;
  /**
   * The new state to set for the flaky test.
   */
  "newState": UpdateFlakyTestsRequestTestNewState;
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
      required: true,
    },
    newState: {
      baseName: "new_state",
      type: "UpdateFlakyTestsRequestTestNewState",
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
    return UpdateFlakyTestsRequestTest.attributeTypeMap;
  }

  public constructor() {}
}
