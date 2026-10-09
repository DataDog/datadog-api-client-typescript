/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateOverrideRequestAttributes } from "./CreateOverrideRequestAttributes";
import { CreateOverrideRequestRelationships } from "./CreateOverrideRequestRelationships";
import { OverrideDataType } from "./OverrideDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for creating an on-call schedule override.
 */
export class CreateOverrideRequestData {
  /**
   * Attributes for creating an on-call schedule override.
   */
  "attributes": CreateOverrideRequestAttributes;
  /**
   * Relationships to set when creating an on-call schedule override.
   */
  "relationships"?: CreateOverrideRequestRelationships;
  /**
   * Indicates that the resource is of type 'overrides'.
   */
  "type": OverrideDataType;

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
      type: "CreateOverrideRequestAttributes",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "CreateOverrideRequestRelationships",
    },
    type: {
      baseName: "type",
      type: "OverrideDataType",
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
    return CreateOverrideRequestData.attributeTypeMap;
  }

  public constructor() {}
}
