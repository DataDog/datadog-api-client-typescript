/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OwnershipUntaggedFindingsData } from "./OwnershipUntaggedFindingsData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The response returned when counting findings without a team tag by ownership confidence.
 */
export class OwnershipUntaggedFindingsResponse {
  /**
   * The data wrapper for an ownership untagged findings response.
   */
  "data": OwnershipUntaggedFindingsData;

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
      type: "OwnershipUntaggedFindingsData",
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
    return OwnershipUntaggedFindingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
