/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OverrideData } from "./OverrideData";
import { OverrideIncluded } from "./OverrideIncluded";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The on-call schedule overrides that were created, and any related included resources (such as users).
 */
export class OverrideCreateResponse {
  /**
   * The on-call schedule overrides that were created.
   */
  "data": Array<OverrideData>;
  /**
   * Related resources referenced in the overrides' relationships, such as users.
   */
  "included"?: Array<OverrideIncluded>;

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
      type: "Array<OverrideData>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<OverrideIncluded>",
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
    return OverrideCreateResponse.attributeTypeMap;
  }

  public constructor() {}
}
