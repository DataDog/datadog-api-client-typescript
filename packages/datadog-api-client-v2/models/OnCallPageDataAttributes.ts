/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OnCallPageLiveCall } from "./OnCallPageLiveCall";
import { OnCallPageReleaseOrigin } from "./OnCallPageReleaseOrigin";
import { OnCallPageStatus } from "./OnCallPageStatus";
import { PageUrgency } from "./PageUrgency";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes of an On-Call Page.
 */
export class OnCallPageDataAttributes {
  /**
   * The time when the page was first acknowledged.
   */
  "acknowledgedAt"?: Date;
  /**
   * The time when the page was resolved.
   */
  "closedAt"?: Date;
  /**
   * The number of comments on the page.
   */
  "commentCount"?: number;
  /**
   * The time when the page was created.
   */
  "createdAt": Date;
  /**
   * A short summary of the issue or context.
   */
  "description": string;
  /**
   * The ID of the escalation policy used to route the page.
   */
  "escalationPolicyUuid"?: string;
  /**
   * An alternative numeric identifier of the page, as displayed in the Datadog UI.
   */
  "key": string;
  /**
   * Live call information for a page triggered by a live call route.
   */
  "liveCall"?: OnCallPageLiveCall;
  /**
   * The time when the page was last modified.
   */
  "modifiedAt"?: Date;
  /**
   * The time when the snooze ends. Only set while the page is snoozed, together with `release_origin`.
   */
  "releaseAt"?: Date;
  /**
   * What snoozed the page. Only set while the page is snoozed, together with `release_at`.
   * `ack_timeout`: the acknowledgment timeout. `team_rules_active_hours`: the page was
   * triggered outside of the active hours of the team's routing rules. `manual_snooze`:
   * a user snoozed the page.
   */
  "releaseOrigin"?: OnCallPageReleaseOrigin;
  /**
   * The time when responders were first added to the page.
   */
  "respondersAddedAt"?: Date;
  /**
   * The services associated with the page.
   */
  "services"?: Array<string>;
  /**
   * The current status of the On-Call Page.
   */
  "status": OnCallPageStatus;
  /**
   * Tags associated with the page.
   */
  "tags": Array<string>;
  /**
   * The title of the page.
   */
  "title": string;
  /**
   * On-Call Page urgency level.
   */
  "urgency": PageUrgency;

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
    acknowledgedAt: {
      baseName: "acknowledged_at",
      type: "Date",
      format: "date-time",
    },
    closedAt: {
      baseName: "closed_at",
      type: "Date",
      format: "date-time",
    },
    commentCount: {
      baseName: "comment_count",
      type: "number",
      format: "int64",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    escalationPolicyUuid: {
      baseName: "escalation_policy_uuid",
      type: "string",
      format: "uuid",
    },
    key: {
      baseName: "key",
      type: "string",
      required: true,
    },
    liveCall: {
      baseName: "live_call",
      type: "OnCallPageLiveCall",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    releaseAt: {
      baseName: "release_at",
      type: "Date",
      format: "date-time",
    },
    releaseOrigin: {
      baseName: "release_origin",
      type: "OnCallPageReleaseOrigin",
    },
    respondersAddedAt: {
      baseName: "responders_added_at",
      type: "Date",
      format: "date-time",
    },
    services: {
      baseName: "services",
      type: "Array<string>",
    },
    status: {
      baseName: "status",
      type: "OnCallPageStatus",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
      required: true,
    },
    title: {
      baseName: "title",
      type: "string",
      required: true,
    },
    urgency: {
      baseName: "urgency",
      type: "PageUrgency",
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
    return OnCallPageDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
