/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { StatusPagesComponentGroupRelationshipsCreatedByUser } from "./StatusPagesComponentGroupRelationshipsCreatedByUser";
import { StatusPagesComponentGroupRelationshipsGroup } from "./StatusPagesComponentGroupRelationshipsGroup";
import { StatusPagesComponentGroupRelationshipsLastModifiedByUser } from "./StatusPagesComponentGroupRelationshipsLastModifiedByUser";
import { StatusPagesComponentGroupRelationshipsStatusPage } from "./StatusPagesComponentGroupRelationshipsStatusPage";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The relationships of a component group.
 */
export class StatusPagesComponentGroupRelationships {
  /**
   * The Datadog user who created the component group.
   */
  "createdByUser"?: StatusPagesComponentGroupRelationshipsCreatedByUser;
  /**
   * The group the component group belongs to.
   */
  "group"?: StatusPagesComponentGroupRelationshipsGroup;
  /**
   * The Datadog user who last modified the component group.
   */
  "lastModifiedByUser"?: StatusPagesComponentGroupRelationshipsLastModifiedByUser;
  /**
   * The status page the component group belongs to.
   */
  "statusPage"?: StatusPagesComponentGroupRelationshipsStatusPage;

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
      type: "StatusPagesComponentGroupRelationshipsCreatedByUser",
    },
    group: {
      baseName: "group",
      type: "StatusPagesComponentGroupRelationshipsGroup",
    },
    lastModifiedByUser: {
      baseName: "last_modified_by_user",
      type: "StatusPagesComponentGroupRelationshipsLastModifiedByUser",
    },
    statusPage: {
      baseName: "status_page",
      type: "StatusPagesComponentGroupRelationshipsStatusPage",
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
    return StatusPagesComponentGroupRelationships.attributeTypeMap;
  }

  public constructor() {}
}
