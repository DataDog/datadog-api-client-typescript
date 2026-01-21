/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { StatusPagesComponentDataRelationshipsCreatedByUser } from "./StatusPagesComponentDataRelationshipsCreatedByUser";
import { StatusPagesComponentDataRelationshipsGroup } from "./StatusPagesComponentDataRelationshipsGroup";
import { StatusPagesComponentDataRelationshipsLastModifiedByUser } from "./StatusPagesComponentDataRelationshipsLastModifiedByUser";
import { StatusPagesComponentDataRelationshipsStatusPage } from "./StatusPagesComponentDataRelationshipsStatusPage";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The relationships of a component.
 */
export class StatusPagesComponentDataRelationships {
  "createdByUser"?: StatusPagesComponentDataRelationshipsCreatedByUser;
  "group"?: StatusPagesComponentDataRelationshipsGroup;
  "lastModifiedByUser"?: StatusPagesComponentDataRelationshipsLastModifiedByUser;
  "statusPage"?: StatusPagesComponentDataRelationshipsStatusPage;

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
      type: "StatusPagesComponentDataRelationshipsCreatedByUser",
    },
    group: {
      baseName: "group",
      type: "StatusPagesComponentDataRelationshipsGroup",
    },
    lastModifiedByUser: {
      baseName: "last_modified_by_user",
      type: "StatusPagesComponentDataRelationshipsLastModifiedByUser",
    },
    statusPage: {
      baseName: "status_page",
      type: "StatusPagesComponentDataRelationshipsStatusPage",
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
    return StatusPagesComponentDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
