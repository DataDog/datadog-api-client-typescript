/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DatasetRestrictionOwnershipMode } from "./DatasetRestrictionOwnershipMode";
import { DatasetRestrictionRestrictionMode } from "./DatasetRestrictionRestrictionMode";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Editable attributes of a dataset restriction. Only `restriction_mode` is required;
 * omitted optional fields retain their current values.
 */
export class DatasetRestrictionUpdateRequestAttributes {
  /**
   * Controls how dataset ownership is determined. `disabled` turns off ownership-based access
   * entirely. `team_tag_based` assigns dataset ownership based on the team tags applied to the
   * data, allowing team members to see their own team's datasets.
   */
  "ownershipMode"?: DatasetRestrictionOwnershipMode;
  /**
   * Controls the default data visibility for the product type. `standard` makes data visible
   * to all users with appropriate product access. `default_hide` hides data by default and
   * requires explicit grants for each dataset.
   */
  "restrictionMode": DatasetRestrictionRestrictionMode;
  /**
   * Principal identifiers (users or roles) that are exempt from the restriction and
   * can always access all datasets for this product type.
   */
  "unrestrictedPrincipals"?: Array<string>;

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
    ownershipMode: {
      baseName: "ownership_mode",
      type: "DatasetRestrictionOwnershipMode",
    },
    restrictionMode: {
      baseName: "restriction_mode",
      type: "DatasetRestrictionRestrictionMode",
      required: true,
    },
    unrestrictedPrincipals: {
      baseName: "unrestricted_principals",
      type: "Array<string>",
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
    return DatasetRestrictionUpdateRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
