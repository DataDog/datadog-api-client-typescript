/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RelationshipToOrganizationData } from "./RelationshipToOrganizationData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationship to an organization.
 */
export class RelationshipToOrganization {
  /**
   * Relationship to organization object.
   */
  "data": RelationshipToOrganizationData;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "RelationshipToOrganizationData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RelationshipToOrganization.attributeTypeMap;
  }

  public constructor() {}
}
