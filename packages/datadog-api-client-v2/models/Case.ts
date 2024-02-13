/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CaseAttributes } from "./CaseAttributes";
import { CaseRelationships } from "./CaseRelationships";
import { CaseResourceType } from "./CaseResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A case
 */
export class Case {
  /**
   * Case attributes
   */
  "attributes": CaseAttributes;
  /**
   * Case's identifier
   */
  "id": string;
  /**
   * Resources related to a case
   */
  "relationships"?: CaseRelationships;
  /**
   * Case resource type
   */
  "type": CaseResourceType;

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
      type: "CaseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "CaseRelationships",
    },
    type: {
      baseName: "type",
      type: "CaseResourceType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return Case.attributeTypeMap;
  }

  public constructor() {}
}
