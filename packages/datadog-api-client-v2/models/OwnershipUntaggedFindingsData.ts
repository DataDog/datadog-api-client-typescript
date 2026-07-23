/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OwnershipUntaggedFindingsAttributes } from "./OwnershipUntaggedFindingsAttributes";
import { OwnershipUntaggedFindingsType } from "./OwnershipUntaggedFindingsType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The data wrapper for an ownership untagged findings response.
 */
export class OwnershipUntaggedFindingsData {
  /**
   * The counts of findings without a team tag by ownership confidence.
   */
  "attributes": OwnershipUntaggedFindingsAttributes;
  /**
   * The identifier of the ownership untagged findings resource.
   */
  "id": string;
  /**
   * The type of the ownership untagged findings resource. The value should always be `ownership_untagged_findings`.
   */
  "type": OwnershipUntaggedFindingsType;

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
    attributes: {
      baseName: "attributes",
      type: "OwnershipUntaggedFindingsAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OwnershipUntaggedFindingsType",
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
    return OwnershipUntaggedFindingsData.attributeTypeMap;
  }

  public constructor() {}
}
