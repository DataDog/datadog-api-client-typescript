/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Attributes } from "./Attributes";
import { RestrictionPolicyType } from "./RestrictionPolicyType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Restriction policy object.
 */
export class RestrictionPolicy {
  /**
   * Restriction policy attributes.
   */
  "attributes": Attributes;
  /**
   * The identifier, always equivalent to resource_id.
   */
  "id": string;
  /**
   * Restriction policy type.
   */
  "type": RestrictionPolicyType;

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
      type: "Attributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RestrictionPolicyType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RestrictionPolicy.attributeTypeMap;
  }

  public constructor() {}
}
