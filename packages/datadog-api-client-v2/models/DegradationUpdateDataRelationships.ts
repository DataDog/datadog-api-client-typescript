/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DegradationUpdateDataRelationshipsDegradation } from "./DegradationUpdateDataRelationshipsDegradation";
import { DegradationUpdateDataRelationshipsStatusPage } from "./DegradationUpdateDataRelationshipsStatusPage";
import { DegradationUpdateDataRelationshipsUser } from "./DegradationUpdateDataRelationshipsUser";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationships of a degradation update resource.
 */
export class DegradationUpdateDataRelationships {
  /**
   * A user relationship of a degradation update.
   */
  "createdByUser"?: DegradationUpdateDataRelationshipsUser;
  /**
   * The degradation relationship of a degradation update.
   */
  "degradation"?: DegradationUpdateDataRelationshipsDegradation;
  /**
   * A user relationship of a degradation update.
   */
  "deletedByUser"?: DegradationUpdateDataRelationshipsUser;
  /**
   * A user relationship of a degradation update.
   */
  "lastModifiedByUser"?: DegradationUpdateDataRelationshipsUser;
  /**
   * The status page relationship of a degradation update.
   */
  "statusPage"?: DegradationUpdateDataRelationshipsStatusPage;

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
    createdByUser: {
      baseName: "created_by_user",
      type: "DegradationUpdateDataRelationshipsUser",
    },
    degradation: {
      baseName: "degradation",
      type: "DegradationUpdateDataRelationshipsDegradation",
    },
    deletedByUser: {
      baseName: "deleted_by_user",
      type: "DegradationUpdateDataRelationshipsUser",
    },
    lastModifiedByUser: {
      baseName: "last_modified_by_user",
      type: "DegradationUpdateDataRelationshipsUser",
    },
    statusPage: {
      baseName: "status_page",
      type: "DegradationUpdateDataRelationshipsStatusPage",
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
    return DegradationUpdateDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
