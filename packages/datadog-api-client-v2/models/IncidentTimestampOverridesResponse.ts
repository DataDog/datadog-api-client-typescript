/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentTimestampOverrideData } from "./IncidentTimestampOverrideData";
import { UserIncluded } from "./UserIncluded";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing a list of incident timestamp overrides.
 */
export class IncidentTimestampOverridesResponse {
  /**
   * Array of incident timestamp overrides.
   */
  "data": Array<IncidentTimestampOverrideData>;
  /**
   * Included related resources.
   */
  "included"?: Array<UserIncluded>;

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
      type: "Array<IncidentTimestampOverrideData>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<UserIncluded>",
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
    return IncidentTimestampOverridesResponse.attributeTypeMap;
  }

  public constructor() {}
}
