/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DatasetRestrictionOwnershipMode } from "./DatasetRestrictionOwnershipMode";
import { DatasetRestrictionPrincipal } from "./DatasetRestrictionPrincipal";
import { DatasetRestrictionRestrictionMode } from "./DatasetRestrictionRestrictionMode";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The current configuration of a dataset restriction, including restriction mode,
 * ownership mode, and exempt principals.
 */
export class DatasetRestrictionResponseAttributes {
  /**
   * Controls how dataset ownership is determined. `disabled` turns off ownership-based access
   * entirely. `team_tag_based` assigns dataset ownership based on the team tags applied to the
   * data, allowing team members to see their own team's datasets.
   */
  "ownershipMode"?: DatasetRestrictionOwnershipMode;
  /**
   * Internal key used by the restriction enforcement system to identify this restriction rule.
   */
  "restrictionKey"?: string;
  /**
   * Controls the default data visibility for the product type. `standard` makes data visible
   * to all users with appropriate product access. `default_hide` hides data by default and
   * requires explicit grants for each dataset.
   */
  "restrictionMode": DatasetRestrictionRestrictionMode;
  /**
   * Principals (users or roles) that are exempt from this restriction and retain
   * full data access regardless of the restriction mode.
   */
  "unrestrictedPrincipals"?: Array<DatasetRestrictionPrincipal>;

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
    restrictionKey: {
      baseName: "restriction_key",
      type: "string",
    },
    restrictionMode: {
      baseName: "restriction_mode",
      type: "DatasetRestrictionRestrictionMode",
      required: true,
    },
    unrestrictedPrincipals: {
      baseName: "unrestricted_principals",
      type: "Array<DatasetRestrictionPrincipal>",
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
    return DatasetRestrictionResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
