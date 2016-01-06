import {Member} from './member';
import {TEAM} from './mock-team';
import {Injectable} from 'angular2/core';

@Injectable()
export class TeamService {

	getTeam() {
		return Promise.resolve(TEAM);
	}
}
